# Pixel Omakase

A mobile-first Japanese pixel-art English ordering game for students.

## Features

- Vertical phone layout
- Name, class and class-number entry before play
- 15 customer orders using **“I would like …”**
- Touch-friendly drag-and-drop food service
- Correct order: **+10 coins**
- Wrong order: **-10 coins**, with a minimum balance of 0
- Six more dishes unlock after reaching 30 coins
- 12 programmatically drawn pixel-food pictures
- Built-in browser-generated Japanese-inspired music and sound effects
- English text-to-speech order playback
- Final score, accuracy, duration and question details
- Automatic teacher-email submission with email and CSV fallbacks

## Teacher email activation

Results are submitted to `yuetki1999@gmail.com` using FormSubmit. FormSubmit requires a one-time activation:

1. Complete one test game.
2. Open the activation email sent to `yuetki1999@gmail.com`.
3. Confirm the form endpoint.

After activation, later submissions can be delivered automatically. The result page also offers an **EMAIL RESULT** button and a **DOWNLOAD RESULT** CSV fallback.

## Run locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages

The repository includes `.github/workflows/pages.yml`. In **Settings → Pages**, choose **GitHub Actions** as the build source if Pages is not already enabled.
