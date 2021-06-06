import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div
      className="flex items-center space-x-3 mb-2 
    relative hover:bg-gray-200 cursor-pointer p-2 rounded-2xl m-2"
    >
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={40}
        height={40}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-6 bg-green-400 h-2 w-2 rounded-full" />
    </div>
  );
}

export default Contact;
