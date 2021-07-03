import { buildFeedbackPath, extractFeedback } from '../../helpers/feedback';

export default function handler(req, res) {
  const id = req.query.id;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const feedback = data.find(feedback => feedback.id === id);
  if (feedback) {
    res.status(200).json({ feedback });
  } else {
    res.status(200).json({ message: 'no data' });
  }
}
