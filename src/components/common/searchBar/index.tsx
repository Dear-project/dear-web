import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./style";
import { SearchBarProps } from "@/types/searchBar/searchBar.types";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({ onChange = () => {}, onSubmit = () => {}, value, placeholder }: SearchBarProps) => {
  return (
    <SearchBarContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <SearchBarIcon>
        <AiOutlineSearch />
      </SearchBarIcon>
      <SearchBarInput  value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </SearchBarContainer>
  );
};