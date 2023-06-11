import app from "./app";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`OTT Scraper API running port ${PORT}`);
});
