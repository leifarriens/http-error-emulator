import { NextResponse } from 'next/server';
import { z } from 'zod';

const codeValidation = z.preprocess(Number, z.number().int());

export type HandlerOptions = {
  params: {
    slug: string;
  };
};

export function handler(request: Request, { params }: HandlerOptions) {
  try {
    const status = codeValidation.parse(params.slug[0]);

    return NextResponse.json(
      {
        message: `Service returned with status code ${status.toString()}`,
      },
      {
        status,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid Status Code' },
      {
        status: 400,
      }
    );
  }
}
