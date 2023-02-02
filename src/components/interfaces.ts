export interface Question{
    category: string,
    id: string,
    correctAnswer: string,
    incorrectAnswers: string[],
    question: string,
    tags: string[],
    type: string,
    difficulty: string,
    regions: [],
    isNiche: boolean
}

export interface Props{
    answer: string
}