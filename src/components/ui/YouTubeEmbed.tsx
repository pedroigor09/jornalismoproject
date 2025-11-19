'use client';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export const YouTubeEmbed = ({ 
  videoId, 
  title = "YouTube video", 
  className = "" 
}: YouTubeEmbedProps) => {
  return (
    <div className={`relative w-full max-w-2xl mx-auto my-12 ${className}`}>
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 italic">
          Reprodução/Redes Sociais
        </p>
      </div>
    </div>
  );
};
