import { Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'white';
}

export function Logo({ variant = 'default', className, ...props }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <div className="relative">
        <Volume2 
          className={cn(
            'h-8 w-8',
            variant === 'white' ? 'text-white' : 'text-primary'
          )} 
        />
        <div 
          className={cn(
            'absolute -bottom-1 -right-1 h-3 w-3 rounded-full',
            variant === 'white' ? 'bg-white' : 'bg-primary'
          )} 
        />
      </div>
      <span 
        className={cn(
          'text-xl font-bold tracking-tight',
          variant === 'white' ? 'text-white' : 'text-foreground'
        )}
      >
        SoundCraft Pro
      </span>
    </div>
  );
} 