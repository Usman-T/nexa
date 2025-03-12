interface StepIndicatorProps {
  steps: { id: string; title: string }[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium ${
                index < currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : index === currentStep
                    ? "border-primary bg-background text-foreground"
                    : "border-muted-foreground/25 bg-background text-muted-foreground"
              }`}
            >
              {index < currentStep ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <div
              className={`mt-2 text-xs font-medium ${
                index <= currentStep ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.title}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`absolute left-0 top-4 h-[2px] w-full -translate-y-1/2 transform ${
                  index < currentStep ? "bg-primary" : "bg-muted-foreground/25"
                }`}
                style={{
                  left: `calc(50% + ${(8 + 16) / 2}px)`,
                  width: `calc(100% - ${8 + 16}px)`,
                  display: "none",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute left-0 top-0 h-1 w-full rounded-full bg-muted-foreground/25">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-300 ease-in-out"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

