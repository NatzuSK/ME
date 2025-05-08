import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Swal from 'sweetalert2';










const App = () => {

 

  const [message, setMessage] = useState("");

  const sendWebhook = async (message) => {
    const webhookUrl = "https://discord.com/api/webhooks/1364120586120331324/bOFlMTjb2whu5AR7QicltrvyDcLJVZbtIXH4bjiYTxnJ7-gl4tdv3Q7X7mLNz3X5Xct3"; 
    const description = "```\n" + message + "\n```";
    const payload = {
      embeds: [
        {
          title: "ข้อความจากผู้ใช้",
          description: description,
          color: 0x0356fc, 
          timestamp: new Date().toISOString(),
          image : {
            url:"https://www.eng.psu.ac.th/images/site/about/about-1.jpg"
          }
        },
      ],
    };
    
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("ส่ง webhook แล้ว!");
    } catch (error) {
      console.error("ส่งไม่สำเร็จ:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (message.trim()) {
      Swal.fire({
        title: 'สำเร็จ!',
        text: `สัญญาจะเก็บไว้ดูคนเดียว EiEi`,
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
      sendWebhook(message);
      setMessage(''); 
    } else {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'กรุณากรอกข้อความก่อนส่ง',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
  };


  return (
    <>
    <Navbar />

    <section
      id="home"
      className="pt-16 h-screen bg-gray-100 flex items-center justify-center px-6"
      data-aos="fade-right"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-6xl w-full">
        <div className="text-gray-800 font-extrabold text-4xl md:text-6xl leading-tight">
          <span className="block">MY</span>
          <span className="block">NAME IS</span>
          <span className="block ml-0 text-blue-600" style={{ textTransform: "uppercase" }}>
            Nat Seesuankaew
          </span>
        </div>
        <div className="mt-10 md:mt-0">
            <img
              src="https://img2.pic.in.th/pic/483319903_1293310825300154_379668834784621900_n.jpg"
              alt="Profile"
              className="w-100 h-150 md:w-80 md:h-80 rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
        </div>
      </div>
    </section>



  <section id="ME" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12" data-aos="fade-up">
    <h1 className="text-4xl font-bold text-black mb-10 text-center">เกี่ยวกับตัวผม</h1>
    
    <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-20 max-w-6xl w-full">
      <div className="mt-10 md:mt-0">
        <img
          src="https://media.discordapp.net/attachments/1348858632087015427/1370093201075212388/476763524_1160357908823506_1100481650048589676_n.png?ex=681e3e3a&is=681cecba&hm=174722b0397c7ddbda3103f98e8573450b4f4f1d82ce8af64bf44878ac2fb5e5&=&format=webp&quality=lossless&width=724&height=482"
          alt="Profile"
          className="w-[360px] h-[240px] md:w-[400px] md:h-[270px] rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

 
      <div className="text-gray-800 font-medium text-lg leading-relaxed text-center md:text-left">
        <p>
          สวัสดีครับ ผมชื่อ <span className="text-blue-600">ณัฏฐ์ สีสวนแก้ว</span> เรียกสั้นๆ ว่า <span className="text-blue-600">ณัฏฐ์</span> ก็ได้ครับ<br/>
          ผมชอบคอมพิวเตอร์มาตั้งแต่เด็กๆ เริ่มจากการชอบเล่นเกม<br/>
          เหมือนผมโดนสะกด ผมหลงใหลกับการเล่นคอมพิวเตอร์มากๆ<br/>
          ผมเริ่มต้นด้วยการตัดต่อคลิปโดยใช้ <span className="text-blue-600">Premiere Pro</span>, <span className="text-blue-600">Photoshop</span><br/>
          ทำให้ผมมีความสามารถทางด้านกราฟิกเล็กน้อย<br/>
          จุดเริ่มต้นของการเขียน <span className="text-blue-600">"Code"</span> คือมีเพื่อนที่สามารถทำเว็บไซต์ของตัวเองได้<br/>
          ผมที่อยากทำเป็นบ้าง ก็เลยเริ่มศึกษาภาษา <span className="text-blue-600">HTML</span>, <span className="text-blue-600">CSS</span>, <span className="text-blue-600">Python</span><br/>
          จนตอนนี้ผมสามารถสร้างเว็บไซต์ต่างๆ เป็นของตัวเองได้บ้างแล้ว<br/>
          <span className="text-blue-600 font-semibold mx-4 mt-2"> "ฝันอันยิ่งใหญ่ มาพร้อมกับความพยายามที่ใหญ่ยิ่ง"</span><br/>
        </p>
      </div>

    </div>
  </section>



  




    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 tracking-wide text-center mb-[20px]">
              มีอะไรจะบอกไหม 💬
            </h2>
            <p className="text-lg md:text-xl font-medium text-blue-500 text-center">
              สัญญาจะเก็บไว้ดูคนเดียว 🤫
            </p>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="1"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="เขียนข้อความของคุณที่นี่..."
              />
              <button
                type="submit"
                className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                ส่งข้อความ
              </button>
            </form>
    </section>
    </>
  );
};

export default App;
