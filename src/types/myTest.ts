export interface TestItemProps {
    id: number;
    question: string;
    answerFirst: string;
    answerSecond: string;
}

export interface TestListProps {
    testList: TestItemProps[];
}