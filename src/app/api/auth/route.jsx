import clientPromise from "@/app/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // default DB from URI

    return new Response(
      JSON.stringify({ success: true, message: "MongoDB connected ✅" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
