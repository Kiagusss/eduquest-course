import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        
        {/* Light mode logo */}
        <Image
          src="/images/eduquest_logo.png"
          alt="Logo EduQuest Light"
          width={50}
          height={50}
          className="block dark:hidden"
        />

        {/* Dark mode logo */}
        <Image
          src="/images/eduquest-logo-dark.png"
          alt="Logo EduQuest Dark"
          width={50}
          height={50}
          className="hidden dark:block"
        />

      </div>
    </div>
  );
}
