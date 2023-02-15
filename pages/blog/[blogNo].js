import { useRouter } from "next/router"

const blogNo = () => {

  const router = useRouter();
  const No = router.query.blogNo;


  // inline style like html file head tag <style></style>


  return (
    <div>
      {/* Styled-JSX */}
      <style jsx>
        {`
            h1{
              color: blue;
            }

        `}
      </style>
      <h1> Blog No. {No}</h1>
    </div>
  )
}

export default blogNo
