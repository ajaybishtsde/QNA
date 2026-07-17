import Link from "next/link";

import { Badge } from "@/src/components/ui/badge";
import { questions } from "@/src/mocks/jsQuestions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function QuestionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Questions</h1>
        <p className="text-muted-foreground">
          Browse the latest questions from the community.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <Link key={question.id} href={`/questions/${question.id}`}>
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">{question.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="line-clamp-2 text-muted-foreground">
                  {question.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {question.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
                  <div className="flex gap-4">
                    <span>⬆️ {question.votes}</span>
                    <span>💬 {question.answers.length}</span>
                    <span>👀 {question.views}</span>
                  </div>

                  <div>
                    {question.author.name} • {question.createdAt}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
