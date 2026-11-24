// Shabad titles follow the exact recitation sequence supplied.
const shabads = [
  {
    title: "ਗੁਰ ਨਾਨਕੁ ਜਗ ਮਾਹਿ ਪਠਾਇਆ",
    lyrics: `ਸੁਣੀ ਪੁਕਾਰਿ ਦਾਤਾਰ ਪ੍ਰਭੁ ਗੁਰੁ ਨਾਨਕੁ ਜਗ ਮਾਹਿ ਪਠਾਇਆ ॥
ਚਰਨ ਧੋਇ ਰਹਰਾਸਿ ਕਰਿ ਚਰਨਾਮ੍ਰਿਤੁ ਸਿਖਾਂ ਪਿਲਾਇਆ ॥
ਪਾਰਬ੍ਰਹਮੁ ਪੂਰਨ ਬ੍ਰਹਮ ਕਲਿਜੁਗਿ ਅੰਦਰਿ ਇਕੁ ਦਿਖਾਇਆ ॥
ਚਾਰੇ ਪੈਰ ਧਰਮ ਦੇ ਚਾਰਿ ਵਰਣ ਇਕੁ ਵਰਣੁ ਕਰਾਇਆ ॥
ਰਾਣਾ ਰੰਕੁ ਬਰਾਬਰੀ ਪੈਰੀ ਪਵਣਾ ਜਗਿ ਵਰਤਾਇਆ ॥
ਉਲਟਾ ਖੇਲੁ ਪਿਰੰਮ ਦਾ ਪੈਰਾ ਉਪਰਿ ਸੀਸੁ ਨਿਵਾਇਆ ॥
ਕਲਿਜੁਗੁ ਬਾਬੇ ਤਾਰਿਆ ਸਤਿ ਨਾਮੁ ਪੜ੍ਹਿ ਮੰਤ੍ਰੁ ਸੁਣਾਇਆ ॥
ਕਲਿ ਤਾਰਣਿ ਗੁਰੁ ਨਾਨਕੁ ਆਇਆ ॥੨੩॥`
  },
  {
    title: "ਮਨ ਕਿਉ ਬੈਰਾਗੁ ਕਰਹਿਗਾ",
    lyrics: `ਪ੍ਰਭੁ ਹੋਇ ਕ੍ਰਿਪਾਲੁ ਤ ਇਹੁ ਮਨੁ ਲਾਈ ॥
ਸਤਿਗੁਰੁ ਸੇਵਿ ਸਭੈ ਫਲ ਪਾਈ ॥੧॥
ਮਨ ਕਿਉ ਬੈਰਾਗੁ ਕਰਹਿਗਾ ਸਤਿਗੁਰੁ ਮੇਰਾ ਪੂਰਾ ॥
ਮਨਸਾ ਕਾ ਦਾਤਾ ਸਭ ਸੁਖ ਨਿਧਾਨੁ ਅੰਮ੍ਰਿਤ ਸਰਿ ਸਦ ਹੀ ਭਰਪੂਰਾ ॥੧॥ ਰਹਾਉ ॥
ਚਰਣ ਕਮਲ ਰਿਦ ਅੰਤਰਿ ਧਾਰੇ ॥
ਪ੍ਰਗਟੀ ਜੋਤਿ ਮਿਲੇ ਰਾਮ ਪਿਆਰੇ ॥੨॥
ਪੰਚ ਸਖੀ ਮਿਲਿ ਮੰਗਲੁ ਗਾਇਆ ॥
ਅਨਹਦ ਬਾਣੀ ਨਾਦੁ ਵਜਾਇਆ ॥੩॥
ਗੁਰੁ ਨਾਨਕੁ ਤੁਠਾ ਮਿਲਿਆ ਹਰਿ ਰਾਇ ॥
ਸੁਖਿ ਰੈਣਿ ਵਿਹਾਣੀ ਸਹਜਿ ਸੁਭਾਇ ॥੪॥੧੭॥`
  },
  {
    title: "ਇਕੁ ਬਾਬਾ ਅਕਾਲ ਰੂਪੁ",
    lyrics: `ਫਿਰਿ ਬਾਬਾ ਗਇਆ ਬਗਦਾਦ ਨੋ ਬਾਹਰਿ ਜਾਇ ਕੀਆ ਅਸਥਾਨਾ ॥
ਇਕੁ ਬਾਬਾ ਅਕਾਲ ਰੂਪੁ ਦੂਜਾ ਰਬਾਬੀ ਮਰਦਾਨਾ ॥
ਦਿਤੀ ਬਾਂਗਿ ਨਿਵਾਜਿ ਕਰਿ ਸੁੰਨਿ ਸਮਾਨਿ ਹੋਆ ਜਹਾਨਾ ॥
ਸੁੰਨ ਮੁੰਨ ਨਗਰੀ ਭਈ ਦੇਖਿ ਪੀਰੁ ਭਇਆ ਹੈਰਾਨਾ ॥
ਵੇਖੈ ਧਿਆਨੁ ਲਗਾਇ ਕਰਿ ਇਕੁ ਫਕੀਰੁ ਵਡਾ ਮਸਤਾਨਾ ॥
ਪੁਛਿਆ ਫਿਰਕੈ ਦਸਤਗੀਰ ਕਉਣ ਫਕੀਰੁ ਕਿਸ ਕਾ ਘਰਾਨਾ ॥
ਨਾਨਕ ਕਲਿ ਵਿਚਿ ਆਇਆ ਰਬੁ ਫਕੀਰੁ ਇਕੋ ਪਹਿਚਾਨਾ ॥
ਧਰਤਿ ਆਕਾਸ ਚਹੁ ਦਿਸਿ ਜਾਨਾ ॥੩੫॥`
  },
  {
    title: "ਕੋਈ ਬੋਲੈ ਰਾਮ ਰਾਮ ਕੋਈ ਖੁਦਾਇ",
    lyrics: `ਕੋਈ ਬੋਲੈ ਰਾਮ ਰਾਮ ਕੋਈ ਖੁਦਾਇ ॥
ਕੋਈ ਸੇਵੈ ਗੁਸਈਆ ਕੋਈ ਅਲਾਹਿ ॥੧॥
ਕਾਰਣ ਕਰਨ ਕਰੀਮ ॥
ਕਿਰਪਾ ਧਾਰਿ ਰਹੀਮ ॥੧॥ ਰਹਾਉ ॥
ਕੋਈ ਨਾਵੈ ਤੀਰਥਿ ਕੋਈ ਹਜ ਜਾਇ ॥
ਕੋਈ ਕਰੈ ਪੂਜਾ ਕੋਈ ਸਿਰੁ ਨਿਵਾਇ ॥੨॥
ਕੋਈ ਪੜੈ ਬੇਦ ਕੋਈ ਕਤੇਬ ॥
ਕੋਈ ਓਢੈ ਨੀਲ ਕੋਈ ਸੁਪੇਦ ॥੩॥
ਕੋਈ ਕਹੈ ਤੁਰਕੁ ਕੋਈ ਕਹੈ ਹਿੰਦੂ ॥
ਕੋਈ ਬਾਛੈ ਭਿਸਤੁ ਕੋਈ ਸੁਰਗਿੰਦੂ ॥੪॥
ਕਹੁ ਨਾਨਕ ਜਿਨਿ ਹੁਕਮੁ ਪਛਾਤਾ ॥
ਪ੍ਰਭ ਸਾਹਿਬ ਕਾ ਤਿਨਿ ਭੇਦੁ ਜਾਤਾ ॥੫॥੯॥`,
    note: true
  },
  {
    title: "ਮਿਠ ਬੋਲੜਾ ਜੀ ਹਰਿ ਸਜਣੁ ਸੁਆਮੀ ਮੋਰਾ",
    lyrics: `ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥
ਮਿਠ ਬੋਲੜਾ ਜੀ ਹਰਿ ਸਜਣੁ ਸੁਆਮੀ ਮੋਰਾ ॥
ਹਉ ਸੰਮਲਿ ਥਕੀ ਜੀ ਓਹੁ ਕਦੇ ਨ ਬੋਲੈ ਕਉਰਾ ॥
ਕਉੜਾ ਬੋਲਿ ਨ ਜਾਨੈ ਪੂਰਨ ਭਗਵਾਨੈ ਅਉਗਣੁ ਕੋ ਨ ਚਿਤਾਰੇ ॥
ਪਤਿਤ ਪਾਵਨੁ ਹਰਿ ਬਿਰਦੁ ਸਦਾਏ ਇਕੁ ਤਿਲੁ ਨਹੀ ਭੰਨੈ ਘਾਲੇ ॥
ਘਟ ਘਟ ਵਾਸੀ ਸਰਬ ਨਿਵਾਸੀ ਨੇਰੈ ਹੀ ਤੇ ਨੇਰਾ ॥
ਨਾਨਕ ਦਾਸੁ ਸਦਾ ਸਰਣਾਗਤਿ ਹਰਿ ਅੰਮ੍ਰਿਤ ਸਜਣੁ ਮੇਰਾ ॥੧॥
`
  },
  {
    title: "ਕੋਈ ਨਾਉ ਨ ਜਾਣੈ ਮੇਰਾ",
    lyrics: `ਤੂੰ ਵਿਸਰਹਿ ਤਾਂ ਸਭੁ ਕੋ ਲਾਗੂ ਚੀਤਿ ਆਵਹਿ ਤਾਂ ਸੇਵਾ ॥
ਅਵਰੁ ਨ ਕੋਊ ਦੂਜਾ ਸੂਝੈ ਸਾਚੇ ਅਲਖ ਅਭੇਵਾ ॥੧॥ ਰਹਾਉ ॥
ਚੀਤਿ ਆਵੈ ਤਾਂ ਸਦਾ ਦਇਆਲਾ ਲੋਗਨ ਕਿਆ ਵੇਚਾਰੇ ॥
ਬੁਰਾ ਭਲਾ ਕਹੁ ਕਿਸ ਨੋ ਕਹੀਐ ਸਗਲੇ ਜੀਅ ਤੁਮ੍ਹ੍ਹਾਰੇ ॥੧॥
ਤੇਰੀ ਟੇਕ ਤੇਰਾ ਆਧਾਰਾ ਹਾਥ ਦੇਇ ਤੂੰ ਰਾਖਹਿ ॥
ਜਿਸੁ ਜਨ ਊਪਰਿ ਤੇਰੀ ਕਿਰਪਾ ਤਿਸ ਕਉ ਬਿਪੁ ਨ ਕੋਊ ਭਾਖੈ ॥੨॥
ਓਹੁ ਸੁਖੁ ਓਹਾ ਵਡਿਆਈ ਜੋ ਪ੍ਰਭ ਜੀ ਮਨਿ ਭਾਣੀ ॥
ਤੂੰ ਦਾਨਾ ਤੂੰ ਸਦ ਮਿਹਰਵਾਨਾ ਨਾਮੁ ਮਿਲੈ ਰੰਗੁ ਮਾਣੀ ॥੩॥
ਤੁਧੁ ਆਗੈ ਅਰਦਾਸਿ ਹਮਾਰੀ ਜੀਉ ਪਿੰਡੁ ਸਭੁ ਤੇਰਾ ॥
ਕਹੁ ਨਾਨਕ ਸਭ ਤੇਰੀ ਵਡਿਆਈ ਕੋਈ ਨਾਉ ਨ ਜਾਣੈ ਮੇਰਾ ॥੪॥੧੦॥੪੯॥`
  },
  {
    title: "ਸਤਿਗੁਰ ਕੀ ਸੇਵਾ ਸਫਲ ਹੈ",
    lyrics: `ਸਤਿਗੁਰ ਕੀ ਸੇਵਾ ਸਫਲ ਹੈ ਜੇ ਕੋ ਕਰੇ ਚਿਤੁ ਲਾਇ ॥
ਨਾਮੁ ਪਦਾਰਥੁ ਪਾਈਐ ਅਚਿੰਤੁ ਵਸੈ ਮਨਿ ਆਇ ॥
ਜਨਮ ਮਰਨ ਦੁਖੁ ਕਟੀਐ ਹਉਮੈ ਮਮਤਾ ਜਾਇ ॥
ਉਤਮ ਪਦਵੀ ਪਾਈਐ ਸਚੇ ਰਹੈ ਸਮਾਇ ॥
ਨਾਨਕ ਪਰਖੈ ਜਿਨ ਕਉ ਲਿਖਿਆ ਤਿਨਾ ਸਤਿਗੁਰੁ ਮਿਲਿਆ ਆਇ ॥੧॥
`
  },
  {
    title: "ਕਲਿ ਤਾਰਣਿ ਗੁਰੁ ਨਾਨਕੁ ਆਇਆ",
    lyrics: `ਸੁਣੀ ਪੁਕਾਰਿ ਦਾਤਾਰ ਪ੍ਰਭੁ ਗੁਰੁ ਨਾਨਕੁ ਜਗ ਮਾਹਿ ਪਠਾਇਆ ॥
ਚਰਨ ਧੋਇ ਰਹਰਾਸਿ ਕਰਿ ਚਰਨਾਮ੍ਰਿਤੁ ਸਿਖਾਂ ਪਿਲਾਇਆ ॥
ਪਾਰਬ੍ਰਹਮੁ ਪੂਰਨ ਬ੍ਰਹਮ ਕਲਿਜੁਗਿ ਅੰਦਰਿ ਇਕੁ ਦਿਖਾਇਆ ॥
ਚਾਰੇ ਪੈਰ ਧਰਮ ਦੇ ਚਾਰਿ ਵਰਣ ਇਕੁ ਵਰਣੁ ਕਰਾਇਆ ॥
ਰਾਣਾ ਰੰਕੁ ਬਰਾਬਰੀ ਪੈਰੀ ਪਵਣਾ ਜਗਿ ਵਰਤਾਇਆ ॥
ਉਲਟਾ ਖੇਲੁ ਪਿਰੰਮ ਦਾ ਪੈਰਾ ਉਪਰਿ ਸੀਸੁ ਨਿਵਾਇਆ ॥
ਕਲਿਜੁਗੁ ਬਾਬੇ ਤਾਰਿਆ ਸਤਿ ਨਾਮੁ ਪੜ੍ਹਿ ਮੰਤ੍ਰੁ ਸੁਣਾਇਆ ॥
ਕਲਿ ਤਾਰਣਿ ਗੁਰੁ ਨਾਨਕੁ ਆਇਆ ॥੨੩॥
`
  },
  {
    title: "ਭੂਲੀ ਮਾਲਨੀ ਹੈ ਏਉ",
    lyrics: `ਪਾਤੀ ਤੋਰੈ ਮਾਲਿਨੀ ਪਾਤੀ ਪਾਤੀ ਜੀਉ ॥ ਜਿਸੁ ਪਾਹਨ ਕਉ ਪਾਤੀ ਤੋਰੈ ਸੋ ਪਾਹਨੁ ਨਿਰਜੀਉ ॥੧॥
ਭੂਲੀ ਮਾਲਨੀ ਹੈ ਏਉ ॥ ਸਤਿਗੁਰੁ ਜਾਗਤਾ ਹੈ ਦੇਉ ॥੧॥ ਰਹਾਉ ॥
ਬ੍ਰਹਮੁ ਪਾਤੀ ਬਿਸਨੁ ਡਾਰਿ ਫੂਲ ਸੰਕਰਦੇਉ ॥ ਤੀਨਿ ਦੇਵ ਪ੍ਰਤਖਿ ਤੋਰਹਿ ਕਰਹਿ ਕਿਸ ਕੀ ਸੇਉ ॥
ਪਾਖਾਨ ਗਢਿ ਕੈ ਮੂਰਤਿ ਕੀਨ੍ਹੀ ਦੇ ਕੈ ਛਾਤੀ ਪਾਉ ॥ ਜੇ ਏਹ ਮੂਰਤਿ ਸਾਚੀ ਹੈ ਤਉ ਗੜ੍ਹਣਹਾਰੇ ਖਾਉ ॥
ਭਾਤੁ ਪਹਿਤਿ ਅਰੁ ਲਾਪਸੀ ਕਰਕਰਾ ਕਾਸਾਰੁ ॥ ਭੋਗਨਹਾਰੇ ਭੋਗਿਆ ਇਸੁ ਮੂਰਤਿ ਕੇ ਮੁਖ ਛਾਰੁ ॥
ਮਾਲਿਨਿ ਭੂਲੀ ਜਗੁ ਭੁਲਾਨਾ ਹਮ ਭੁਲਾਨੇ ਨਾਹਿ ॥ ਕਹੁ ਕਬੀਰ ਹਮ ਰਾਮ ਰਾਖੇ ਕ੍ਰਿਪਾ ਕਰਿ ਹਰਿ ਰਾਇ ॥
    `,
    note: true
  },
  {
    title: "ਗੁਣ ਗਾਵਾ ਦਿਨੁ ਰਾਤਿ",
    lyrics: `ਸਿਮ੍ਰਿਤਿ ਬੇਦ ਪੁਰਾਣ ਪੁਕਾਰਨਿ ਪੋਥੀਆ ॥
ਨਾਮ ਬਿਨਾ ਸਭਿ ਕੂੜੁ ਗਾਲ੍ਹੀ ਹੋਛੀਆ ॥੧॥
ਨਾਮੁ ਨਿਧਾਨੁ ਅਪਾਰੁ ਭਗਤਾ ਮਨਿ ਵਸੈ ॥
ਜਨਮ ਮਰਣ ਮੋਹੁ ਦੁਖੁ ਸਾਧੂ ਸੰਗਿ ਨਸੈ ॥੧॥ ਰਹਾਉ ॥
ਮੋਹਿ ਬਾਦਿ ਅਹੰਕਾਰਿ ਸਰਪਰ ਰੁੰਨਿਆ ॥
ਸੁਖੁ ਨ ਪਾਇਨ੍ਹਿ ਮੂਲਿ ਨਾਮ ਵਿਛੁੰਨਿਆ ॥੨॥
ਮੇਰੀ ਮੇਰੀ ਧਾਰਿ ਬੰਧਨਿ ਬੰਧਿਆ ॥
ਨਰਕਿ ਸੁਰਗਿ ਅਵਤਾਰ ਮਾਇਆ ਧੰਧਿਆ ॥੩॥
ਸੋਧਤ ਸੋਧਤ ਸੋਧਿ ਤਤੁ ਬੀਚਾਰਿਆ ॥
ਨਾਮ ਬਿਨਾ ਸੁਖੁ ਨਾਹਿ ਸਰਪਰ ਹਾਰਿਆ ॥੪॥
ਆਵਹਿ ਜਾਹਿ ਅਨੇਕ ਮਰਿ ਮਰਿ ਜਨਮਤੇ ॥
ਬਿਨੁ ਬੂਝੇ ਸਭੁ ਵਾਦਿ ਜੋਨੀ ਭਰਮਤੇ ॥੫॥
ਜਿਨ੍ਹ ਕਉ ਭਏ ਦਇਆਲ ਤਿਨ੍ਹ ਸਾਧੂ ਸੰਗੁ ਭਇਆ ॥
ਅੰਮ੍ਰਿਤੁ ਹਰਿ ਕਾ ਨਾਮੁ ਤਿਨ੍ਹੀ ਜਨੀ ਜਪਿ ਲਇਆ ॥੬॥
ਖੋਜਹਿ ਕੋਟਿ ਅਸੰਖ ਬਹੁਤੁ ਅਨੰਤ ਕੇ ॥
ਜਿਸੁ ਬੁਝਾਏ ਆਪਿ ਨੇੜਾ ਤਿਸੁ ਹੇ ॥੭॥
ਵਿਸਰੁ ਨਾਹੀ ਦਾਤਾਰ ਆਪਣਾ ਨਾਮੁ ਦੇਹੁ ॥
ਗੁਣ ਗਾਵਾ ਦਿਨੁ ਰਾਤਿ ਨਾਨਕ ਚਾਉ ਏਹੁ ॥੮॥੨॥੫॥੧੬॥`
  }
];

const listEl = document.getElementById("shabad-list");
const collection = document.getElementById("collection");
const welcome = document.getElementById("welcome");
const reader = document.getElementById("reader");
const searchInput = document.getElementById("search");
let activeShabad = null;

function renderList(filter = "") {
  listEl.innerHTML = "";
  const normalized = filter.trim().toLocaleLowerCase();
  const matches = shabads.map((item, index) => ({ ...item, index }))
    .filter(item => item.title.toLocaleLowerCase().includes(normalized));

  if (!matches.length) {
    listEl.innerHTML = '<p class="list-footnote">No Shabad found. Try another title.</p>';
    return;
  }

  matches.forEach(item => {
    const button = document.createElement("button");
    button.className = "shabad-item";
    button.type = "button";
    button.innerHTML = `<span class="shabad-number">${String(item.index + 1).padStart(2, "0")}</span>
      <span class="shabad-name"></span><span class="chevron" aria-hidden="true">›</span>`;
    button.querySelector(".shabad-name").textContent = item.title;
    button.addEventListener("click", () => openShabad(item.index));
    listEl.appendChild(button);
  });
}

function openShabad(index) {
  activeShabad = shabads[index];
  document.getElementById("reader-number").textContent = `SHABAD ${String(index + 1).padStart(2, "0")}`;
  document.getElementById("reader-title").textContent = activeShabad.title;
  const lyricsEl = document.getElementById("reader-lyrics");
  const missing = document.getElementById("missing-note");
  lyricsEl.replaceChildren();

  const titleText = activeShabad.title.trim();
  const normalizeLine = line => line
    .replace(/[॥।ੴ॥\d]/g, "")
    .replace(/[\s]+/g, "")
    .trim();
  const normalizedTitle = normalizeLine(titleText);

  (activeShabad.lyrics || "").split("\n").forEach(line => {
    const lyricLine = document.createElement("p");
    lyricLine.textContent = line.trim();
    if (line.trim() && normalizeLine(line).includes(normalizedTitle)) {
      lyricLine.className = "highlight-line";
    }
    lyricsEl.appendChild(lyricLine);
  });

  missing.classList.toggle("hidden", Boolean(activeShabad.lyrics));
  collection.classList.add("hidden");
  welcome.classList.add("hidden");
  reader.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("view-shabads").addEventListener("click", () => {
  welcome.classList.add("hidden");
  reader.classList.add("hidden");
  collection.classList.remove("hidden");
  renderList();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function goBackToCollection() {
  reader.classList.add("hidden");
  collection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.getElementById("back-button").addEventListener("click", goBackToCollection);
document.getElementById("bottom-back-button").addEventListener("click", goBackToCollection);
if (searchInput) {
  searchInput.addEventListener("input", event => renderList(event.target.value));
}

// Typing welcome message
const welcomeMessage = "May the words of Gurbani bring peace to every heart.";
const typed = document.getElementById("typed-message");
let charIndex = 0;
function typeMessage() {
  if (charIndex < welcomeMessage.length) {
    typed.textContent += welcomeMessage.charAt(charIndex++);
    setTimeout(typeMessage, 48);
  }
}
window.addEventListener("load", () => setTimeout(typeMessage, 500));
