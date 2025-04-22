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
          src="https://media.discordapp.net/attachments/1168558781769199638/1363871135971938437/476763524_1160357908823506_1100481650048589676_n.jpg?ex=68079b7a&is=680649fa&hm=44bd24da9f907ee7554729dadf110b6919841c31ec372ca6efd284326d741a1c&=&format=webp&width=724&height=482"
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
        src="https://media.discordapp.net/attachments/1168558781769199638/1363878595851845984/image.png?ex=6807a26c&is=680650ec&hm=bacf3ea737f44b3192910917d9670a9e2bb63f071023ca5dccee502c54b95a19&=&format=webp&quality=lossless&width=287&height=141" 
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
      <div className="w-[300px] aspect-[16/9]">
          <img 
            src="https://media.discordapp.net/attachments/1168558781769199638/1363882985467810035/image.png?ex=6807a683&is=68065503&hm=b896abb577641d17ddf3987b916fe53b7d755079cf23aab8b05701a12a2b9e89&=&format=webp&quality=lossless&width=281&height=151" 
            className="w-full h-full object-cover rounded-lg"
          />
      </div>
    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-blue-600 underline" style={{ textTransform: "uppercase" }}>Rank-Up</h2>
      <p className="mt-2 text-gray-700">
        บอทจัดอันดับ Rank สำหรับ Discord ที่สามารถบันทึกจากการส่งข้อความ<br />
        บอทตัวนี้ช่วยให้การจัดอันดับในเซิร์ฟเวอร์ Discord <br />
        ของผมมีความสนุกและลูกเล่นมากยิ่งขึ้น 🚀<br />
        <span className="text-blue-500 font-bold">เทคโนโลยี:</span> Python (Nextcord), Mongodb สำหรับจัดเก็บข้อมูล<br />
        
      </p>
    </div>
  </div>








  <div className="mt-3 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
    <div className="flex-shrink-0">
      <div className="w-[300px] aspect-[3/4]">
        <img 
          src="https://media.discordapp.net/attachments/1168558781769199638/1364116070360944640/image.png?ex=68087f97&is=68072e17&hm=a768ad02e28877ba6007655de6be3bb0783a39f6e8c795f8b2b4c4378ce29dea&=&format=webp&quality=lossless&width=405&height=575" 
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
          src="https://media.discordapp.net/attachments/1168558781769199638/1363884206672969799/image.png?ex=6807a7a6&is=68065626&hm=70fb57a7726f951f7dfb9171d93af140d4d237aae2e414905b90bfdc65aef5a5&=&format=webp&quality=lossless&width=448&height=458" 
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
          src="https://media.discordapp.net/attachments/1168558781769199638/1364069309684383814/image.png?ex=6808540a&is=6807028a&hm=4aaed8fe6ea100bcba0c5e4d11b0ab8b09de83108f8b16c91b9fe70ba2fd86c8&=&format=webp&quality=lossless&width=404&height=271" 
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
          src="https://media.discordapp.net/attachments/1168558781769199638/1364066239038623754/image.png?ex=6808512e&is=6806ffae&hm=2aac2fbeab4f34382a6c4473a6a00e12bde5fbb2994c33b8c9aba1c42eff81a9&=&format=webp&quality=lossless&width=377&height=253" 
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
          src="https://media.discordapp.net/attachments/1168558781769199638/1364102766003359774/image.png?ex=68087333&is=680721b3&hm=d1eb24a4b0902f8c6b93171d0cf3fb00694ecb2f9185c63f0917286d36ae259d&=&format=webp&quality=lossless&width=641&height=404" 
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
