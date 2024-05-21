const ProjectGrid = () => {
  const imageData = [
    {
      id: 1,
      imageUrl: '/img/portfolio1.png',
      title: 'Image 1',
      description: 'Short description for image 1',
      detailedText: 'Detailed text for image 1',
    },
    {
      id: 2,
      imageUrl: '/img/portfolio2.png',
      title: 'Image 2',
      description: 'Short description for image 2',
      detailedText: 'Detailed text for image 2',
    },
    {
      id: 3,
      imageUrl: '/img/portfolio3.png',
      title: 'Image 3',
      description: 'Short description for image 3',
      detailedText: 'Detailed text for image 3',
    },
    {id: 4,
      imageUrl: '/img/portfolio4.png',
      title: 'Image 4',
      description: 'Short description for image 1',
      detailedText: 'Detailed text for image 1',
    },
    {
      id: 5,
      imageUrl: '/img/portfolio5.png',
      title: 'Image 5',
      description: 'Short description for image 3',
      detailedText: 'Detailed text for image 2',
    },
    {
      id: 6,
      imageUrl: '/img/portfolio6.png',
      title: 'Image 6',
      description: 'Short description for image 3',
      detailedText: 'Detailed text for image 3',
    },
  ];
  return (
    <div className="grid grid-cols-1 my-4  sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-lg ">
      {imageData.map((image) => (
        <div key={image.id} className=" bg-white relative mx-2 rounded-xl shadow-lg  group object-contain">
          <img
            src={image.imageUrl}
            alt={image.title}
            className="w-full h-auto cursor-pointer transition-all duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white ">
              <h3 className="text-lg font-bold">{image.title}</h3>
              <p className="text-sm bottom-0 left-0 ">{image.description}</p>
              <p className="text-xs hidden group-hover:block">{image.detailedText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ProjectGrid