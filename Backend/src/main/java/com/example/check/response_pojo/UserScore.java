package com.example.check.response_pojo;

public class UserScore {
	private String userame;
	private Long number;
	public UserScore(String userame, Long number) {
		super();
		this.userame = userame;
		this.number = number;
	}
	public String getUserame() {
		return userame;
	}
	public void setUserame(String userame) {
		this.userame = userame;
	}
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
	}
	public UserScore() {
		super();
	}
	@Override
	public String toString() {
		return "UserScore [userame=" + userame + ", number=" + number + ", getUserame()=" + getUserame()
				+ ", getNumber()=" + getNumber() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
}
