// Requests

type Animal = 'cat' | 'dog' | 'bird';

enum AnimalStatus {
  Available = 'available',
  NotAvailable = 'not available',
}

// Response #1
interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

// Response #2
interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

interface AnimalAvailableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvailableData;
}

type Response = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(response: Response): response is AnimalAvailableResponse {
  if (response.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Response): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

// API
async function fetchAnimalData(id: string) {
  const response = await fetch(`/api/animals/${id}`);
  const data: Response = await response.json();

  const result = checkAnimalData(data);

  if (typeof result === 'string') {
    console.log('Not available:', result);
  } else {
    console.log('Available animal:', result.animal, result.location);
  }
}
