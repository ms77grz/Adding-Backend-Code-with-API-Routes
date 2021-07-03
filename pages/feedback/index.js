import { buildFeedbackPath, extractFeedback } from '../../helpers/feedback';

export default function FeedbackPage({ feedbackItems }) {
  return (
    <ul>
      {feedbackItems.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  console.log(data);

  return {
    props: { feedbackItems: data },
  };
}
