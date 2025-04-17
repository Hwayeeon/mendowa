import { ImageResponse } from "next/og";
import { baseURL } from "@/resources/config";
import { company } from "@/resources/content";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "8rem",
          background: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
            fontFamily: "Inter",
            fontStyle: "normal",
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "8rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
              whiteSpace: "pre-wrap",
              textWrap: "balance",
            }}
          >
            {title}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://${baseURL}${company.logo}`}
              alt={`${company.name} logo`}
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "4.5rem",
                  lineHeight: "4.5rem",
                  whiteSpace: "pre-wrap",
                  textWrap: "balance",
                }}
              >
                {company.name}
              </span>
              <span
                style={{
                  fontSize: "2.5rem",
                  lineHeight: "2.5rem",
                  whiteSpace: "pre-wrap",
                  textWrap: "balance",
                  opacity: "0.6",
                }}
              >
                {company.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
