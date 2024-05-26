export class CreatePointDto {
  id?: number;
  points: number;
  order_id?: number;
  user_id: number;
  action: string;
  created_at?: Date;
  action_value?: string;
}