import { NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

export async function GET() {
  return NextResponse.json({
    profile: portfolioData.profile,
    summary: portfolioData.summary,
    stats: portfolioData.stats
  });
}
