import Image from "next/image";
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <Image 
        src="/images/eduquest_logo.png" 
        alt="Logo EduQuest" 
        width={50} 
        height={50} 
      />
      </div>
    </div>
  )
}
