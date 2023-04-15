export interface FeedbackItemInterface
{
    item: {
        id: number;

        name: string;

        className?: string;

        vacancy: string;

        response_date: string;
    };
}