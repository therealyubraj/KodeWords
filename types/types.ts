type CardProps = {
  word:string,
  type : string
  clickable?: boolean
  id?: number
}

type WordType = {
  word: string;
  type: string;
  id?: number;
};

export {CardProps, WordType};