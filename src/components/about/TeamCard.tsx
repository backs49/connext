'use client';

import { useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import type { TeamMember } from '@/types/team';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const locale = useLocale();

  const name = locale === 'ko' ? member.nameKo : member.name;
  const title = locale === 'ko' ? member.titleKo : member.title;
  const bio = locale === 'ko' ? member.bioKo : member.bio;

  return (
    <Card className="text-center p-8" hover>
      {/* Image placeholder */}
      <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy/10 to-bio/10">
        <svg
          className="h-12 w-12 text-navy/25"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-navy">{name}</h3>

      {/* Title */}
      <p className="mt-1 text-sm font-medium text-bio">{title}</p>

      {/* Bio (truncated) */}
      <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
        {bio}
      </p>
    </Card>
  );
}
