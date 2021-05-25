export class PropertyFilter {
  constructor(
    public bedroom_type?: string,
    public bathroom_type?: string,
    public page_index?: number,
    public page_size?: number
  ) {}
}

export class Properties {
  constructor(
    public property_id?: string,
    public descriptive_title?: string,
    public property_name_display?: number,
    public asset_name?: number,
    public price?: string,
    public property_description?: string,
    public date_created?: Date,
    public media_list?: MediaList[]
  ) {}
}

export class MediaList {
  constructor(public attatchment?: string, public typer?: string) {}
}

export class singleProperty {
  constructor(public property_id?: string) {}
}

export class propertyDetails {
  constructor(
    public adress?: Address[],
    public asset_type_name?: string,
    public price?: string,
    public property_name_display?: string,
    public property_description?: string,
    public company_detail?: CompanyDetail[],
    public media_list?: MediaList[]
  ) {}
}

export class Address {
  constructor(public city?: string, public street?: string) {}
}

export class CompanyDetail {
  constructor(
    public about_company?: string,
    public company_logo?: string,
    public company_name?: string,
    public registration_number?: number
  ) {}
}
