
import React from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const BlogCard = ({ data }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/post/${data._id}`);
    // console.log(data._id)
  };

  return (
    <>
      {data.image && (
        <div className="my-5">
          <div className="row my-lg-4">
            <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <Image src={data.image.url} alt="Bootstrap" width={150} height={150} /><br />
                  <p className="text-center mb-5"><b>{data.title}</b></p>
                  {/* <p className="text-center mb-5"><b>{data.content}</b></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
