import { SearchBarStyled } from "../Styles/searchInput";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = ({
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <SearchBarStyled
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="standard"
    />
  );
};
