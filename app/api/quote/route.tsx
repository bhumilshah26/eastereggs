import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const quotes = [
  `Counting digits of a number was never so easy ✌️. Try: log10(n) + 1`,
  `Want to reverse all true if's to false 😁? Try: #define if(x) if(!x)`,
  `What is the output to this 😮? Try: printf("%d", printf("Nice Trick"))`,
  `Min-Max of two numbers without >=< or 3rd var ✌️. Try: max = ((a+b)+abs(a-b))/2`,
  `Swap without temp 😁. Try: a = a + b - (b = a)`,
  `Another swap 😮. Try: a ^= b ^= a ^= b`,
  `Even or Odd? (n & 1) 🧓 ? "Odd" : "Even"`,
  `Lowercase -> Uppercase functions were difficult to remember for each P.L.✌️. Try: char ch = 'a' & '_'`,
  `Digital root in 1 line 😮. Try: 1 + (n - 1) % 9`,
];

function getDailyIndex(): number {
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  return seed % quotes.length;
}

const author = 'Life_Code';

export async function GET(_req: NextRequest) {
  const quote = quotes[getDailyIndex()];

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#0d0c1d',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 40,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#13111c',
            borderRadius: 16,
            padding: '24px 32px',
            maxWidth: 680,
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              fontSize: 24,
              fontStyle: 'italic',
              color: '#aef9ff',
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: '#f3c623', fontSize: 32, marginRight: 6 }}>
              “
            </span>
            <span>{quote}</span>
            <span style={{ color: '#f3c623', fontSize: 32, marginLeft: 6, marginTop: 30 }}>
              ”
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: 18,
              marginTop: 12,
              color: '#f25f9b',
              fontStyle: 'normal',
            }}
          >
            — {author}
          </div>
        </div>
      </div>
    ),
    {
      width: 768,
      height: 250,
    }
  );
}
