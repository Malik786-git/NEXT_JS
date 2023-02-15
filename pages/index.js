import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import myImg from '../public/mygif.gif';


const index = () => {
  return (

<>
{/* add head tag on root page or any page where you want, 
 here you add title or meta tags for seo simple like html head
*/}
  <Head>
    <title>NextJS Learning</title>

  </Head>
    <div>
      
    <Navbar/>
     <h1 className="heading_style">Home Page</h1>
     {/* images in next JS, we must need to give width height or layout */}
     
     {/* <Image src="/images.jpg" layout="fill"></Image> */}
     {/* this height and width unit is px */}
     <Image src="/images.jpg" width={250} height="200" className="customImage" alt="images"></Image>

   <br />
  
     {/* using import, here we don't need to give height width.   */}
     <Image src={myImg} alt="images" className="customImage"></Image>

   <br />
    {/*  images add using url, but we need to add images: {
    domains: ["media.istockphoto.com"] 
      } property next.config.js and restart app. */}
     <Image src="https://media.istockphoto.com/id/1361595256/photo/front-view-of-a-workspace-modern-computer-blank-mockup-screen.jpg?b=1&s=170667a&w=0&k=20&c=n-KI_XwLlXu0yPi3gnAkMC-jAPbkdfZuSISo6IgHU6A=" width={200} height={150} alt="images"></Image>
   <br />
     
     {/* html img */}
    <img src="https://media.istockphoto.com/id/1361595256/photo/front-view-of-a-workspace-modern-computer-blank-mockup-screen.jpg?b=1&s=170667a&w=0&k=20&c=n-KI_XwLlXu0yPi3gnAkMC-jAPbkdfZuSISo6IgHU6A=" width="150px" />
    


   {/* Comparision */}
    {/* //////////////////// */}
    <Image src="/images.jpg" width={250} height="200" className="customImage" alt="images"></Image>

<br />
{/* it is render fast as compare to above img componenet. */}
 <img src="/images.jpg" width={250} height="200" className="customImage" />
    </div>
</>

  )
}

export default index;



// difference b/w simple html img and Image component

/*
Firstly, the Image component provides automatic image optimization, which can help improve the performance of your app. Next.js automatically optimizes images using the next/image module, which can reduce the size of the image file and improve loading times.

Secondly, the Image component provides responsive image support out of the box, which can make it easier to create responsive images that work well on different screen sizes. The layout prop can be used to specify how the image should be displayed, and the sizes and srcSet props can be used to provide different versions of the image for different screen sizes.

Finally, the Image component also supports lazy loading, which means that the image will only be loaded when it comes into view, which can improve the initial load time of your app.

That being said, there may be certain situations where the HTML img tag is more appropriate. For example, if you need to apply custom styles to the image, or if you need to use a specific image file format that isn't supported by the Image component.

*/
