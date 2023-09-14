
const Blog = ({ blog }) => {
  const { title, cover, author, img, reading_time } = blog;


  return (
    <div>
      <img src={cover} alt={`Cover picture of title ${title} `} />
      <div className='flex justify-between'>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <span> {reading_time} min read </span>
        </div>

      </div>

      <h2 className='text-4xl' > {title} </h2>
    </div>
  );
};

export default Blog;