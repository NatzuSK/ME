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
          src="https://media.discordapp.net/attachments/1168558781769199638/1363871135971938437/476763524_1160357908823506_1100481650048589676_n.jpg?ex=680995ba&is=6808443a&hm=f0be8a7088fe6097b59aaa97a923e968baff4602f2fb7636902a627ca87e25d1&=&format=webp&width=810&height=540"
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



  <section id="project" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
  <h1 className="text-4xl font-bold text-black mb-10 text-center">Project</h1>

  <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
    <div className="flex-shrink-0">
      <img 
        src="https://media.discordapp.net/attachments/1168558781769199638/1363878595851845984/image.png?ex=68099cac&is=68084b2c&hm=bab5cfec5d54e439dbc779619f1b71e592807cf6dce23d3b8ac8a5f28302393e&=&format=webp&quality=lossless&width=321&height=158" 
        alt="Project Dictionary" 
        className="w-[300px] h-[150px] object-cover rounded-lg"
      />
    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline" style={{ textTransform: "uppercase" }}>Dictionary</h2>
      <p className="mt-2 text-gray-700">
        ผลงานแรกที่ผมได้ใช้ทักษะทั้งหน้าบ้านและหลังบ้านในการพัฒนา<br />
        <span className="text-blue-500 font-bold">Front-end:</span> React, Tailwind CSS<br />
        <span className="text-blue-500 font-bold">Back-end:</span> Python(Flask)
      </p>
    </div>

  </div>
  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
    <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[3/3]">
          <img 
            src="https://media.discordapp.net/attachments/1168558781769199638/1364596482866417665/image.png?ex=680a3f02&is=6808ed82&hm=e6efe4d79c748daeca956c9159cb64de116d1cc2bbb03c461ece764bb9c4c8eb&=&format=webp&quality=lossless&width=278&height=260" 
            className="w-full h-full object-cover rounded-lg"
          />
      </div>
    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline" style={{ textTransform: "uppercase" }}>Bot-Minigame</h2>
      <p className="mt-2 text-gray-700">
        บอท Minigame คณิตคิดไว , เป่ายิ้งฉุบ<br />
        ทำให้Severของผมมีความสนุกและลูกเล่นมากยิ่งขึ้น 🚀<br />
        <span className="text-blue-500 font-bold">เทคโนโลยี:</span> Python (Nextcord)<br />
        
      </p>
    </div>
  </div>








  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
    <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[3/4]">
        <img 
          src="https://media.discordapp.net/attachments/1168558781769199638/1364116070360944640/image.png?ex=6809d117&is=68087f97&hm=bfd63cde72ed46cd97e6f6ada8132f132c191a8c47e2e99f14d3d2237ad81f6b&=&format=webp&quality=lossless&width=405&height=575" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline" style={{ textTransform: "uppercase" }}>เครื่องคิดเลข</h2>
      <p className="mt-2 text-gray-700">
        เป็น Project แรกที่ผมเริ่มทำจากการเรียนรู้การสร้างเว็บไซต์<br />
        โดยใช้ความรู้พื้นฐานของการเขียนเว็บ <br />
        <span className="text-blue-500 font-bold">เทคโนโลยี:</span> HTML,CSS,JAVASCRIPT
      </p>
    </div>
  </div>





  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
    <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[3/3]">
        <img 
          src="https://media.discordapp.net/attachments/1168558781769199638/1363884206672969799/image.png?ex=6809a1e6&is=68085066&hm=3c3c99f4eeb7309471572ddb8023d330e5c7569bd22949566c771966187c191f&=&format=webp&quality=lossless&width=448&height=458" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline" style={{ textTransform: "uppercase" }}>BMI-CALCULATOR</h2>
      <p className="mt-2 text-gray-700">
        เป็น Project แรกๆที่ผมเริ่มทำจากการเรียนรู้การสร้างเว็บไซต์<br />
        เป็นเว็บไซต์สำหรับคำณวน ดัชนีมวลกาย<br />
        <span className="text-blue-500 font-bold">เทคโนโลยี:</span> HTML,CSS,JAVASCRIPT
      </p>
    </div>
  </div>






  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
    <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[16/9]">
        <img 
          src="https://media.discordapp.net/attachments/1168558781769199638/1364069309684383814/image.png?ex=6809a58a&is=6808540a&hm=7b88615eb3a1886a9b02d77bfd688dc83fa1bf30765a0c3d337afcc61c8894b6&=&format=webp&quality=lossless&width=404&height=271" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline">Remove Image Background</h2>
      <p className="mt-2 text-gray-700">
        เป็นเว็บแอพพลิเคชั่น ที่สามารถลบพื้นหลังของรูปภาพอัตโนมัติ<br />
        <span className="text-blue-500 font-bold">Front-end:</span> HTML,CSS<br />
        <span className="text-blue-500 font-bold">Back-end:</span> Python(Flask)
      </p>
    </div>
  </div>







  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
    <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[16/9]">
        <img 
          src="https://media.discordapp.net/attachments/1168558781769199638/1364597018688884757/image.png?ex=680a3f82&is=6808ee02&hm=b96a3d14088c64e559080b8a1f3453ec150199e510f924020c4e3d643b6f3a9d&=&format=webp&quality=lossless&width=369&height=258" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline">YouTube Downloader</h2>
      <p className="mt-2 text-gray-700">
        YT Downloader เป็นโปรแกรมง่าย ๆ สำหรับดาวน์โหลดวิดีโอหรือเพลงจาก YouTube ได้ทั้งแบบ MP4 และ MP3<br />
        <span className="text-blue-500 font-bold">เทคโนโลยี:</span> Python (Pytube,Tkinter)
      </p>
    </div>
  </div>


  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">


  <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[16/9]">
        <img 
          src="https://media.discordapp.net/attachments/1168558781769199638/1364102766003359774/image.png?ex=6809c4b3&is=68087333&hm=c402649b071f5fd3c6be476fb00a8f5b951ee0a12d33cb3b2bab685ab849d8a7&=&format=webp&quality=lossless&width=641&height=404" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
  </div>
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline">Face-Recognition</h2>
      <p className="mt-2 text-gray-700">
        โปรเจกต์นี้เป็นระบบตรวจจับใบหน้าจากภาพแบบอัตโนมัติ<br />
        <span className="text-blue-500 font-bold">เทคโนโลยี:</span> Python (OpenCV)
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
