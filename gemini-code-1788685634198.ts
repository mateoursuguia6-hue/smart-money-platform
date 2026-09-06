import { SourceRef } from '../types/intelligence';

export interface APIAdapterResponse<T> {
  status: 'CONNECTED' | 'DATA_NOT_CONNECTED' | 'ERROR';
  data?: T;
  message?: string;
  source: SourceRef;
}

export class SEC13FAdapter {
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_SEC_EDGAR_API_KEY;
  }

  public async fetchInstitutionalHoldings(cik: string): Promise<APIAdapterResponse<any>> {
    const source: SourceRef = {
      id: 'sec-13f-edgar',
      name: 'SEC EDGAR 13F Filings',
      url: `https://www.sec.gov/edgar/browse/?CIK=${cik}`,
      timestamp: new Date().toISOString(),
      type: 'FACT',
      confidenceScore: 99,
      isVerified: true,
    };

    if (!this.apiKey) {
      return {
        status: 'DATA_NOT_CONNECTED',
        message: 'No SEC EDGAR API Key configured in environment variables. Set NEXT_PUBLIC_SEC_EDGAR_API_KEY in .env.local to stream live SEC filings.',
        source,
      };
    }

    try {
      // Simulación de llamada real cuando se dispone de la API Key
      const res = await fetch(`https://api.sec-api.io/13f/filings?cik=${cik}&token=${this.apiKey}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      return {
        status: 'CONNECTED',
        data,
        source,
      };
    } catch (err: any) {
      return {
        status: 'ERROR',
        message: err.message || 'Error fetching data from SEC EDGAR API',
        source,
      };
    }
  }
}