import { useRouter } from "next/router"

const blogNo = () => {

  // for get router query...
  // const router = useRouter();
  // const No = router.query.blogNo;
 

  // or
  // for get blog dynamic data
  
  
  return (
    <div>
      {/* // inline style like html file head tag <style></style> */}
      {/* Styled-JSX */}
      <style jsx>
        {`
            h1{
              color: blue;
            }
        `}
      </style>
      <h1> Blog No.</h1>
    </div>
  )
}


export default blogNo;