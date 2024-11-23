import nodemailer from "nodemailer";

export async function POST(req) {
  // Veriyi al
  const body = await req.json();
  const { name, email, message } = body;

  // Alanlar boşsa hata döndür
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required." }),
      { status: 400 }
    );
  }

  // Nodemailer yapılandırması
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Gmail kullanıyorsanız bu ayarı kullanın
    auth: {
      user: process.env.EMAIL_USER, // .env.local'daki e-posta kullanıcı adı
      pass: process.env.EMAIL_PASS, // .env.local'daki e-posta şifresi
    },
  });

  try {
    // E-posta gönderme işlemi
    await transporter.sendMail({
      from: email, // Gönderenin e-posta adresi
      to: process.env.RECEIVER_EMAIL, // Alıcı e-posta adresi
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });

    // Başarı yanıtı döndür
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    // Hata yanıtı döndür
    return new Response(
      JSON.stringify({ message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
