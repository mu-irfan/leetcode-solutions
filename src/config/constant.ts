export const QUESTIONS = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    answer: "Paris",
    code: ` const nums = [2, 7, 11, 15];
    const target = 9;
    function twoSum(arr, target) {
      const numMap = {};
      for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (complement in numMap) {
          return [numMap[complement], i];
        }
        numMap[arr[i]] = i;
      }
      return [];
    }
    twoSum(nums, target);`,
    tags: ["Easy", "Array", "Hash Table"],
  },
  {
    id: 2,
    title: "Truncate Sentence",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    answer: "Paris",
    code: `const s = "Hello how are you Contestant";
    const k = 4;
    
    function truncateSentence(sen, inp){
        return sen.split(" ").splice(0,inp).join(" ");
    }
    
    const res  = truncateSentence(s, k)
    console.log(res);`,
    tags: ["Easy", "Array", "Hash Table"],
  },
  {
    id: 3,
    title: "Reverse Words in a String III",
    description:
      "You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.",
    answer: "Paris",
    code: `const s = "God Ding";

    function reverseWords(str){
        const toArr = str.split(" ");
        let res = [];
        for(let i = 0; i < toArr.length; i++){
           res.push(toArr[i].split("").reverse().join(""))
        }
       return res.join(" ");
    }
    
    reverseWords(s)`,
    tags: ["Easy", "Array", "Hash Table"],
  },
  {
    id: 4,
    title: "Percentage of Letter in String",
    description: `Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.`,
    answer: "Paris",
    code: `const s = "foobar",
    letter = "o";
  
  function percentageLetter(word, letter) {
    let toArr = word.split("");
    let count = 0;
    for (let i = 0; i < toArr.length; i++) {
      if (toArr[i] === letter) {
        count++;
      }
    }
    return Math.floor(((count / toArr.length) * 100));
  }
  
  percentageLetter(s, letter);`,
    tags: ["Easy", "Array", "Hash Table"],
  },
  {
    id: 5,
    title: "Counting Words With a Given Prefix",
    description: `You are given an array of strings words and a string pref. Return the number of strings in words that contain pref as a prefix. A prefix of a string s is any leading contiguous substring of s.`,
    answer: "Paris",
    code: `const words = ["pay","attention","practice","attend"],
    pref = "at";

    function prefixCount(words, pref){
        let counter = 0;
        for(let i = 0; i < words.length; i++){
            if(words[i].startsWith(pref)){
               counter++;
            }
        }
        return counter;
    }
    
    prefixCount(words, pref)`,
    tags: ["Easy", "Array", "Hash Table"],
  },
  {
    id: 6,
    title: "Power of Four",
    description: `Given an integer n, return true if it is a power of four. Otherwise, return false. An integer n is a power of four, if there exists an integer x such that n == 4x.`,
    answer: "Paris",
    code: `const n = 16;

    function isPowerOfFour(inp) {
      if (inp <= 0) return false;
      return parseInt(inp.toString(4).split("").reverse().join("")) === 1;
    }
    
    isPowerOfFour(n);`,
    tags: ["Easy", "Array", "Hash Table"],
  },
];
