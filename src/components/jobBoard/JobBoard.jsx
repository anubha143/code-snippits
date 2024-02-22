import { useEffect, useState } from "react";

const JobBoard = () => {
  const [page, setPage] = useState(0);
  const [jobInfo, setJobInfo] = useState([]);
  const [noMore, setNoMore] = useState(false);
  const fetchIdsUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json";

  useEffect(() => {
    fetchIds();
  }, []);

  const fetchIds = async () => {
    const response = await fetch(fetchIdsUrl);
    const ids = await response.json();
    const slicedIds = ids?.slice(page * 6, page * 6 + 6);
    if (slicedIds.length < 6) {
      setNoMore(true);
    }
    fetchJobInfo(slicedIds);
  };
  const fetchJobInfo = async (ids) => {
    console.log("idßsss", ids);
    const response = await Promise.all(
      ids.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      )
    );
    const jobs = await Promise.all(response.map((job) => job.json()));
    setJobInfo((prev) => {
      console.log("prev", prev);
      return [...prev, ...jobs];
    });
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    console.log({ jobInfo });
  }, [jobInfo]);

  return (
    <div>
      <h1 className="job-board-header">Hacker news job board</h1>
      <div className="job-board-wrapper">
        {jobInfo?.map((item, i) => (
          <div className="job-board-single-job" key={i}>
            {item?.url ? (
              <a href={item?.url}>{item?.title}</a>
            ) : (
              <p>{item?.title}</p>
            )}
            <div>
              <p>{`By ${item?.by} . ${new Date(
                item?.time * 1000
              ).toLocaleString()}`}</p>
            </div>
          </div>
        ))}
      </div>
      {!noMore && <button onClick={fetchIds}>Load more jobs</button>}
    </div>
  );
};

export default JobBoard;
