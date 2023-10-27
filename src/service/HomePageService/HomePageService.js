

export const GetQuiz = async () => {
    const res = await fetch('https://server.nglearns.com/quizz/285498f5-3486-434d-a459-bedb6bcea7ce');
    const data = await res.json();
    return data;
}