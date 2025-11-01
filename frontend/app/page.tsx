import { MentalHealthSurveyApp } from "@/components/MentalHealthSurveyApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mental Health Survey
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            A privacy-preserving mental health questionnaire built with FHEVM
          </p>
        </div>
        <MentalHealthSurveyApp />
      </div>
    </main>
  );
}

