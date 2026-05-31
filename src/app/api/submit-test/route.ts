import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Xử lý logic tính điểm IQ hoặc Tính cách tại đây
    // Data có thể gồm: { testId, answers: [...] }
    // Có thể lưu kết quả vào Database (PostgreSQL, Supabase) hoặc Sanity
    
    return NextResponse.json({ 
      success: true, 
      message: "Test submitted successfully",
      score: 115, // Dummy score
      assessment: "Logic không gian xuất sắc" 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
