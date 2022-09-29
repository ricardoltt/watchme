import { memo } from "react";
import { Button } from './Button'

interface SideBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }>;
  selectedGenreId: number;
  handleClick: Function;
}

export function SideBarComponent(props: SideBarProps) {
  const { genres, handleClick, selectedGenreId } = props;
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            selected={selectedGenreId === genre.id}
            onClick={() => handleClick(genre.id)}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return (
    prevProps.selectedGenreId === nextProps.selectedGenreId &&
    prevProps.genres.length === nextProps.genres.length
  );
});