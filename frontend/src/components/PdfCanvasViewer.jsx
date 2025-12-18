import React from "react";
import * as pdfjsLib from "pdfjs-dist";

// Use the bundled worker from pdfjs-dist
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url,
).toString();

export const PdfCanvasViewer = ({ url }) => {
  const [status, setStatus] = React.useState({ type: "idle", message: "" });
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!url) return;
      setStatus({ type: "loading", message: "Loading…" });

      try {
        const loadingTask = pdfjsLib.getDocument({
          url,
          // extra hardening (best-effort)
          disableStream: true,
          disableAutoFetch: true,
        });

        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1.6 });
        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);

        await page.render({ canvasContext: ctx, viewport }).promise;
        if (cancelled) return;

        setStatus({ type: "ready", message: "" });
      } catch (e) {
        if (cancelled) return;
        setStatus({
          type: "error",
          message: "Unable to display PDF right now.",
        });
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="w-full" onContextMenu={(e) => e.preventDefault()}>
      {status.type === "loading" ? (
        <div className="rounded-2xl border border-[rgba(201,162,77,0.28)] bg-white/30 p-6 text-sm text-[color:var(--brand-text-muted)]">
          Loading…
        </div>
      ) : null}

      {status.type === "error" ? (
        <div className="rounded-2xl border border-[rgba(201,162,77,0.28)] bg-white/30 p-6 text-sm text-[color:var(--brand-text-muted)]">
          {status.message}
        </div>
      ) : null}

      <div className="overflow-auto rounded-2xl border border-[rgba(201,162,77,0.28)] bg-white/25">
        <canvas ref={canvasRef} className="block w-full" />
      </div>

      <div className="mt-2 text-xs text-[color:var(--brand-text-muted)]">
        View-only (best-effort): no download button, no print UI, right-click disabled.
      </div>
    </div>
  );
};
