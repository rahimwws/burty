type ScoreData = { name: string; score: number };

type TransformedMatchDetailsData = {
   goal: ScoreData[];
   foul: ScoreData[];
};

export default TransformedMatchDetailsData;