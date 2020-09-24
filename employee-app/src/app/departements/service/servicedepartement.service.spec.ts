import { TestBed } from "@angular/core/testing";

import { ServicedepartementService } from "./servicedepartement.service";

describe("ServicedepartementService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ServicedepartementService = TestBed.get(
      ServicedepartementService
    );
    expect(service).toBeTruthy();
  });
});
