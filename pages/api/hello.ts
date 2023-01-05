// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const { content , title , image , timestamp } = req.body
 console.log( { content , title , image , timestamp })
 console.log("this is the api from next js")
 //@ts-ignore
 res.json({message:"this is the api from next js"})
}
