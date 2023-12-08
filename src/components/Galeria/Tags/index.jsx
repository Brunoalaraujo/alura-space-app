import styled from "styled-components";
import tags from "./tags.json";

const TagsTitulo = styled.h3`
  width: 219px;
  color: #d9d9d9;
  font-family: Gandhi Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;

const TagContainer = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px 8px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <TagContainer>
      <TagsTitulo>Busque por tags:</TagsTitulo>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.titulo}</Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
