# Custom Loader Components

This project includes several React components for more imaginative loading states.

## MatrixLoader

```tsx
import { MatrixLoader } from '@/components/ui/matrix-loader';

<MatrixLoader className="h-6" />
```

MatrixLoader renders five vertical bars that scale up and down in sequence, evoking digital code rain.

## CodeOrbitLoader

```tsx
import { CodeOrbitLoader } from '@/components/ui/code-orbit-loader';

<CodeOrbitLoader className="w-16 h-16" />
```

CodeOrbitLoader displays two dashed rings spinning in opposite directions around a `</>` symbol.

## AskLoader

```tsx
import { AskLoader } from '@/components/ui/ask-loader';

<AskLoader className="w-32 h-32" />
```

AskLoader animates the company initials "ASK" with lines being drawn sequentially on a dark background.
