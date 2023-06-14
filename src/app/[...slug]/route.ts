import { HandlerOptions, handler } from '@/handlers';

export const runtime = 'edge';

export const GET = (request: Request, options: HandlerOptions) =>
  handler(request, options);
export const POST = (request: Request, options: HandlerOptions) =>
  handler(request, options);
export const PUT = (request: Request, options: HandlerOptions) =>
  handler(request, options);
export const PATCH = (request: Request, options: HandlerOptions) =>
  handler(request, options);
export const DELETE = (request: Request, options: HandlerOptions) =>
  handler(request, options);
