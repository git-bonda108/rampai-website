

export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, industry, type, message } = body

    // Validate required fields
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        email,
        company: company || null,
        industry: industry || null,
        type,
        message,
        status: 'new'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully',
        id: inquiry.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
